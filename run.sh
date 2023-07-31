#!/bin/bash
docker_build_up () {
    docker compose  up --build
}

docker_build_down () {
    docker compose down
}