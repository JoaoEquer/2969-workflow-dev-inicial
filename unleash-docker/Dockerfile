FROM unleashorg/unleash-server:4.16.4
USER root
COPY wait-for /wait-for
RUN if command -v apk > /dev/null; then \
        apk add --no-cache dos2unix; \
    elif command -v apt-get > /dev/null; then \
        apt-get update && apt-get install -y dos2unix; \
    fi && \
    dos2unix /wait-for && \
    chmod +x /wait-for
USER node
