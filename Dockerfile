# ---------- Web Builder ----------
FROM node:22-alpine AS frontend
WORKDIR /app/payment

# Install
COPY payment/package.json payment/yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy
COPY payment .
COPY core /app/core

# Build
RUN yarn build

# ---------- Go Builder ----------
FROM golang:1.24 AS backend
WORKDIR /app/core

# Install
COPY core/go.mod core/go.sum ./
RUN go mod download

# Copy
COPY core .
COPY --from=frontend /app/core/web ./web

# Build
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -ldflags="-s -w" -o /server ./cmd/server

# ---------- Runtime ----------
FROM gcr.io/distroless/static-debian12

WORKDIR /

COPY --from=backend /server /server
COPY --from=backend /app/core/internal/migrations /internal/migrations
COPY --from=backend /app/core/web /web

EXPOSE 8000
ENTRYPOINT ["/server"]