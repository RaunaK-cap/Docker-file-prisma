FROM node:20-alpine

WORKDIR /app

#install openssl to fix prisma warnings
RUN apk add --no-cache openssl

COPY  ./package.json ./package.json 
COPY ./package-lock.json ./package-lock.json 

RUN  npm install 

COPY  . .

#taking a host machine db url while building --network=host 
# ENV  DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres


RUN  npx prisma generate 
RUN  npm run build


CMD [ "npm" , "run" , "docker:start" ]
