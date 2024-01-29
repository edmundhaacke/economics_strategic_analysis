ARG VARIANT=bullseye
FROM mcr.microsoft.com/vscode/devcontainers/jekyll:0-${VARIANT}
ARG NODE_VERSION="none"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi
RUN yarn add postcss@latest tailwindcss@latest autoprefixer@latest cssnano@latest -D
