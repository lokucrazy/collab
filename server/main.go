package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	http.ListenAndServe("127.0.0.1:8080", r)
}
