FROM nginx:alpine

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 复制项目文件
COPY . .

# 复制 Nginx 配置
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# 设置适当的权限
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"] 