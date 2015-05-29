FROM nginx

# Create folder for static files
RUN mkdir /mynodeapp && mkdir /mynodeapp/public
# copy sslcert files to /etc/nginx/ for https
#COPY yourdomain.* /etc/nginx/
# copy conf
COPY nginx-docker.conf /etc/nginx/nginx.conf