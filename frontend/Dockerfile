from node
WORKDIR /client
RUN mkdir -p /client
WORKDIR /client
COPY package.json /client
RUN npm cache clean --force
RUN npm install
COPY . /client
# EXPOSE 3000
# CMD ["npm","start"]