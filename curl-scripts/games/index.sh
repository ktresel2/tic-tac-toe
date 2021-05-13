#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
echo
