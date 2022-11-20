FROM node

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

ENV NODE_ENV
ENV SANITY_TOKEN

COPY static ./static
copy siteMetadata.js .
COPY podcast-feed.js .
COPY gatsby-*.js .
COPY tsconfig.json .
COPY src ./src

EXPOSE 8000
CMD yarn start
