##############################################
#     Stage1: Build angular source code      #
##############################################

# Getting node Docker image from registry
# Naming the compilation stage as base (so we will be able to refer to it in another stage)
FROM node:14-alpine as build

# Create app directory to hold the application code inside the image
# This will be the default working directory for your application
WORKDIR /usr/src/app

# Copying package.json & package-lock.json files from local root directory
# This file contains all dependencies and their versions that our app requires
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Installing necessary libraries (based on the packages.json file copied in previous step)
RUN npm install

# Copying all remaining files with a source code
# from the project’s root directory on the host machine to the specified working directory’s path on the container’s filesystem.
COPY . .

# Compiling - Building project
RUN npm run build

########################################
# Stage 2: Serve app with nginx server #
########################################

# Getting a nginx Docker image from Docker Hub
FROM nginx:alpine

# copy-paste the default nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output from build stage to replace the default nginx contents in the container.
COPY --from=build /dist/bootstrap-tooltip /usr/share/nginx/html

# Informs Docker that the nginx container listens on network port 80 at runtime. By default, the nginx server runs on port 80, hence we are exposing that specific port.
# Expose port 80 so we'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 80

# Build and run the docker container
# docker build -t angular-web-app-image:latest .
# The file path . defines the location of the Dockerfile in the current directory, and the -t argument tags the resulting image

# Check docker images available locally
# docker image ls
# Run docker image to create and run docker container
# docker run -d -p 8080:80 angular-web-app-image:latest
# The -d option, causes Docker to detach the container and have it run in the background.
# The -p argument establishes a port mapping, which defines that port 80 of the docker container (as specified in dockerfile), should be exposed to port 8080 of our host machine.

# To check the details of our running container, type in the following command:
# docker ps

# Push our image to an image repository, to deploy our containers to a cloud service.
# If you have a DockerHub account you can execute the following commands:
# docker login -u <username> -p <password>
# docker push angular-web-app-image:latest