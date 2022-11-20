#!/bin/bash

set -e

heartbeat_query="query { sanityNavigation { heartbeat } }"

heartbeat_update=$(cat <<-JSON
  {
    "mutations": [{
      "patch": {
        "id": "drafts.39e3e2cd-f904-4c55-aa97-df25ee541932",
        "set": {
          "heartbeat": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
        }
      }
    }]
  }
JSON
)

function read_heartbeat() {
  curl -s 'http://localhost:8000/___graphql' \
    -H 'Content-Type: application/json' \
    -d "{\"query\": \"${heartbeat_query}\"}"
}

function write_heartbeat() {
  curl -s 'https://iq9kxmf9.api.sanity.io/v1/data/mutate/production' \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer ${HEARTBEAT_SANITY_TOKEN}" \
    -d "${heartbeat_update}"

}

before=$(read_heartbeat)
update=$(write_heartbeat)
sleep 2
after=$(read_heartbeat)

if [[ $before == $after ]]; then
  echo Heartbeat was the same before and after update! Something must be wrong.
  echo
  echo Update response:
  echo "  ${update}"
  exit 1
else
  echo "Heartbeat was successful!"
  echo
  echo Before:
  echo "  ${before}"
  echo
  echo After:
  echo "  ${after}"
  exit 0
fi
