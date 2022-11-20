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

HEARTBEAT_SANITY_TOKEN=$(echo -ne "fxn4EmqB73jaSNbvBjNEXoOZsmjr6ENfNafaEyOj5YdVA0Ats3cC7trEUKG8AutaeoPlv4Jr7y8eYmz4c2ZMvGKg77e9j54269QQN8IbQjAZHjSgiSBwLglpP36N1EymKPsO8H6YQTcPKFbYUHFTrlZ6LfwKkhcMpaoyr0FT1idbJyTsc2MH" | tr '[A-MN-Za-mn-z]' '[N-ZA-Mn-za-m]')

function read_heartbeat() {
  curl -s 'https://midwaycc-preview.fly.dev/___graphql' \
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
