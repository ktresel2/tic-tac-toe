#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request DELETE \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
