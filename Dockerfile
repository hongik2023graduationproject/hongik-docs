# CI에서 미리 빌드한 결과물을 그대로 패키징
FROM nginx:alpine

COPY docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
