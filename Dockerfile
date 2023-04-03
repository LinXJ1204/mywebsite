# Specify a base image
FROM node:14-alpine


# Install some depenendencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]