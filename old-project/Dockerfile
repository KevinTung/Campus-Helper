FROM node:10.16.3
COPY . /server
WORKDIR /server
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 443
CMD node backend/start.js -p 443 --data /data --key /cert/privkey.pem --cert /cert/cert.pem \
  --sqlhost ${DB_HOST} --sqluser ${DB_USER} --sqlpwd ${DB_PWD} --sqldb ${DB_NAME} --eshost ${ES_HOST} --esindex ${ES_INDEX}
# needed environment:
# DB_HOST, DB_USER, DB_PWD, DB_NAME, ES_HOST, ES_INDEX
# mount static file directory to /data
# mount key and certificate to /cert/privkey.pem, /cert/cert.pem
# listen at port 443