REPO_BASE_URL?=<your_image_registry_base_url>
ARTIFACT_NAME?={{name}}
tag?=latest

## help: Print this help message
.PHONY: help
help: 
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/ /'

## test: Unit test
.PHONY: test
test:
	npm test

## compile: Compile TypesScript to JavaScript
.PHONY: compile
compile:
	npm run build

## run-local: Run application on local machine
.PHONY: run-local
run-local:
	npm run serve-local

## glogin-registry: Google cloud CLI login
.PHONY: glogin-registry
glogin-registry:
	gcloud auth configure-docker $(REGION)-docker.pkg.dev

## glogin: Google Artifact Registry login
.PHONY: glogin
glogin:
	gcloud auth login

## build: Docker build image, [tag]=alpha1
.PHONY: build
build: compile
	docker build --platform linux/amd64 . -t $(REPO_BASE_URL)/$(ARTIFACT_NAME):$(tag)

## build: Docker push image, [tag]=alpha1
.PHONY: push
push:
	docker push $(REPO_BASE_URL)/$(ARTIFACT_NAME):$(tag)

## deploy: Deploying App to GKE dev namespace
.PHONY: deploy
deploy:
	kubectl apply -f deploy/gke/all.yaml --namespace=dev

## deploy-pod: Deploying the Pod to GKE dev namespace
.PHONY: deploy-pod
deploy-pod:
	kubectl apply -f deploy/gke/deploy.yaml --namespace=dev

## deploy-svc: Deploying the SVC to GKE dev namespace
.PHONY: deploy-svc
deploy-svc:
	kubectl apply -f deploy/gke/svc.yaml --namespace=dev

## undeploy: Undeploying the app from GKE
.PHONY: undeploy
undeploy:
	kubectl delete -f deploy/gke/all.yaml --namespace=dev

## undeploy-pod: Undeploying the Pod from GKE
.PHONY: undeploy-pod
undeploy-pod:
	kubectl delete -f deploy/gke/deploy.yaml --namespace=dev

## undeploy: Undeploying the SVC from GKE
.PHONY: undeploy-svc
undeploy-svc:
	kubectl delete -f deploy/gke/svc.yaml --namespace=dev