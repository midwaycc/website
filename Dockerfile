FROM node

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

ENV NODE_ENV development
ENV SANITY_TOKEN asdf

COPY scripts ./scripts
COPY static ./static
copy siteMetadata.js .
COPY podcast-feed.js .
COPY gatsby-*.js .
COPY tsconfig.json .
COPY src ./src

EXPOSE 8000
CMD yarn start
