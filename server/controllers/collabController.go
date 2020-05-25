package controllers

import (
	"net/http"

	"github.com/gorilla/mux"
)

// CollabController - controller for collab routes
type CollabController struct {
}

func (c *CollabController) getAllCollabs(w http.ResponseWriter, r *http.Request) {

}

func (c *CollabController) getCollabByID(w http.ResponseWriter, r *http.Request) {

}

func (c *CollabController) insertCollab(w http.ResponseWriter, r *http.Request) {

}

func (c *CollabController) removeCollab(w http.ResponseWriter, r *http.Request) {

}

// CreateCollabController - creates a new collab controller and creates routes for the router
func CreateCollabController(r *mux.Router) {
	collabController := CollabController{}
	r.Methods("GET").HandlerFunc(collabController.getAllCollabs)
	r.Methods("GET").HandlerFunc(collabController.getCollabByID)
	r.Methods("POST", "PUT").HandlerFunc(collabController.insertCollab)
	r.Methods("DELETE").HandlerFunc(collabController.removeCollab)
}
