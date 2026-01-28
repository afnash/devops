# 📚 Demystifying DevOps
## A Complete Student Handbook

**By Ajnas N B**  
**Founder, Cognifyr.CO**

---

## 🎯 Table of Contents

1. [What is DevOps?](#what-is-devops)
2. [Why DevOps?](#why-devops)
3. [Base Components Explained](#base-components-explained)
4. [How DevOps Works](#how-devops-works)
5. [Our Project Structure](#our-project-structure)
6. [Step-by-Step Workshop Guide](#step-by-step-workshop-guide)
7. [Understanding the Code](#understanding-the-code)
8. [The Future of DevOps](#the-future-of-devops)
9. [Key Takeaways](#key-takeaways)

---

## 🤔 What is DevOps?

### Simple Explanation 

DevOps is a methodology that brings together software development and IT operations teams to work collaboratively throughout the entire software lifecycle.

**The Traditional Problem:** 
- Developers write code and want to deploy it quickly
- Operations teams manage servers and want stability
- These teams often work in silos, causing delays and conflicts

**DevOps Solution:** 
DevOps bridges this gap by:
- Encouraging collaboration between Development and Operations
- Automating the software delivery process
- Implementing continuous integration and continuous deployment (CI/CD)
- Using infrastructure as code
- Monitoring and logging everything
- Embracing a culture of shared responsibility

**Result:** Faster deployments, higher quality, better collaboration, and more reliable systems.

### Technical Definition

**DevOps** = **Dev**elopment + **Op**erations

It's a way of working where:
- **Developers** (people who write code) and **Operations** (people who run servers) work together
- Code changes go from your computer → testing → production automatically
- Everything is automated, so humans make fewer mistakes
- Problems are found and fixed quickly

### The DevOps Lifecycle

```
Code → Build → Test → Deploy → Monitor → Learn → Improve
   ↑                                                    ↓
   ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

This is a continuous cycle that improves with each iteration!

---

## 💡 Why DevOps?

### The Old Way (Before DevOps)

Traditional software deployment process:

1. Developer writes code on their computer
2. Developer sends code to operations team (via email, shared drive, etc.)
3. Operations team manually sets up servers
4. Operations team manually deploys the application
5. If there's a bug, the entire process repeats from step 1

**Problems:**
- ❌ Takes days or weeks
- ❌ Lots of manual work
- ❌ Easy to make mistakes
- ❌ If something breaks, hard to fix
- ❌ Developers and Operations blame each other

### The DevOps Way

1. You write the story
2. You push a button (git push)
3. **Automatically:**
   - Story is tested
   - Story is built into a website
   - Story goes live
   - If something breaks, it tells you immediately

**Benefits:**
- ✅ Takes minutes instead of days
- ✅ Everything is automated
- ✅ Fewer mistakes
- ✅ Easy to fix problems
- ✅ Everyone works together

### Real-World Benefits

| Before DevOps | With DevOps |
|--------------|-------------|
| 🐌 Deployments take weeks | ⚡ Deployments take minutes |
| 😰 Manual, error-prone | 🤖 Automated, reliable |
| 👥 Teams blame each other | 🤝 Teams work together |
| 🐛 Bugs found in production | ✅ Bugs found before production |
| 💰 Expensive downtime | 💵 Less downtime, more savings |
| 😓 Stressful releases | 😊 Smooth, frequent releases |

---

## 🧩 Base Components Explained

Before diving into DevOps practices, it's essential to understand the fundamental components and tools that make DevOps possible. This section explains each base component in detail.

### 1. What is Git?

**Git** is a distributed version control system that tracks changes in source code during software development.

#### Key Concepts:

- **Repository (Repo)**: A folder that contains your project files and the entire history of changes
- **Commit**: A snapshot of your code at a specific point in time
- **Branch**: A parallel version of your code where you can make changes without affecting the main code
- **Push**: Uploading your local changes to a remote repository (like GitHub)
- **Pull**: Downloading changes from a remote repository to your local machine
- **Clone**: Creating a local copy of a remote repository

#### Why Git Matters:

- **Version History**: See every change ever made to your code
- **Collaboration**: Multiple developers can work on the same project simultaneously
- **Rollback**: Easily revert to previous versions if something breaks
- **Branching**: Work on features without affecting production code

#### Common Git Commands:

```bash
git clone <url>          # Download a repository
git add .                 # Stage changes for commit
git commit -m "message"   # Save changes with a message
git push                  # Upload changes to remote
git pull                  # Download latest changes
git status                # See what files have changed
```

#### In Our Project:

We use Git to:
- Store our code in GitHub
- Track all changes to `server.js`, `Dockerfile`, Kubernetes manifests, etc.
- Trigger CI/CD pipelines when we push changes

---

### 2. What is a Container?

A **container** is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, system tools, libraries, and settings.

#### Key Characteristics:

- **Isolated**: Each container runs in its own isolated environment
- **Portable**: Runs the same way on any machine (your laptop, cloud, server)
- **Lightweight**: Shares the host OS kernel, making it more efficient than virtual machines
- **Consistent**: Eliminates "it works on my machine" problems

#### Container vs Virtual Machine:

| Containers | Virtual Machines |
|------------|------------------|
| Share OS kernel | Each VM has its own OS |
| Faster startup | Slower startup |
| Less resource usage | More resource usage |
| Better for microservices | Better for full OS isolation |

#### Container Benefits:

Containers provide:
- **Standardization**: Consistent packaging format
- **Completeness**: Contains everything needed (app + dependencies + runtime)
- **Portability**: Runs identically across different environments
- **Isolation**: Each container operates independently

---

### 3. What is Docker?

**Docker** is a platform that enables you to create, deploy, and run applications using containers.

#### Key Components:

1. **Docker Engine**: The runtime that builds and runs containers
2. **Docker Image**: A read-only template used to create containers
3. **Docker Container**: A running instance of an image
4. **Dockerfile**: A text file with instructions to build an image
5. **Docker Hub**: A public registry of Docker images (like GitHub for containers)

#### Docker Workflow:

```
Dockerfile → Docker Build → Docker Image → Docker Run → Container
```

1. Write a `Dockerfile` (instructions)
2. Build an image: `docker build -t myapp .`
3. Run a container: `docker run myapp`

#### Why Docker?

- **Consistency**: Same environment in development, testing, and production
- **Isolation**: Apps don't interfere with each other
- **Scalability**: Easy to run multiple instances
- **Portability**: Works on Windows, Linux, macOS, cloud

#### In Our Project:

Our `Dockerfile` creates a Docker image that:
- Starts with Node.js 20
- Installs dependencies
- Copies our code
- Exposes port 3000
- Runs our Express server

---

### 4. What is ACR (Azure Container Registry)?

**Azure Container Registry (ACR)** is a managed Docker container registry service in Azure that stores and manages your Docker container images.

#### What is a Container Registry?

A container registry is a **private repository** for Docker images where you can:
- Store your Docker images securely
- Version your images (tag them with versions)
- Control who can access your images
- Integrate with Azure services

#### ACR Features:

- **Private Storage**: Your images are private by default
- **Geo-replication**: Store images in multiple regions
- **Security**: Integration with Azure Active Directory
- **Webhooks**: Get notified when images are pushed
- **Vulnerability Scanning**: Automatically scan images for security issues

#### Common ACR Operations:

```bash
# Login to ACR
az acr login --name <registry-name>

# Build and push image
docker build -t <registry>.azurecr.io/<image>:<tag> .
docker push <registry>.azurecr.io/<image>:<tag>

# List repositories
az acr repository list --name <registry-name>

# List tags (versions)
az acr repository show-tags --name <registry-name> --repository <image>
```

#### In Our Project:

We use ACR (`acedevopsdemoacr`) to:
- Store our built Docker images
- Version our application images
- Provide images to AKS for deployment

---

### 5. What is Kubernetes?

**Kubernetes** (often abbreviated as **K8s**) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

#### What is Container Orchestration?

Container orchestration means:
- **Scheduling**: Deciding which server runs which container
- **Scaling**: Automatically adding/removing containers based on demand
- **Health Monitoring**: Restarting containers if they crash
- **Load Balancing**: Distributing traffic across containers
- **Rolling Updates**: Updating apps without downtime

#### Key Kubernetes Concepts:

1. **Cluster**: A set of nodes (machines) that run containerized applications
2. **Node**: A worker machine (can be physical or virtual)
3. **Pod**: The smallest deployable unit (contains one or more containers)
4. **Deployment**: Manages a set of identical pods
5. **Service**: Exposes pods to network traffic
6. **Namespace**: A way to organize resources in a cluster

#### Kubernetes Architecture:

```
┌─────────────────────────────────────┐
│         Control Plane (Master)       │
│  - API Server                       │
│  - Scheduler                        │
│  - Controller Manager               │
└─────────────────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼───┐          ┌───▼───┐
│ Node 1│          │ Node 2│
│ Pods  │          │ Pods  │
└───────┘          └───────┘
```

#### Why Kubernetes?

- **Auto-scaling**: Automatically scale up/down based on load
- **Self-healing**: Restarts failed containers
- **Rolling Updates**: Update apps without downtime
- **Service Discovery**: Containers can find each other automatically
- **Resource Management**: Efficiently uses server resources

#### Common kubectl Commands:

```bash
kubectl get pods              # List all pods
kubectl get deployments       # List all deployments
kubectl get services          # List all services
kubectl apply -f file.yaml    # Apply configuration
kubectl describe pod <name>   # Get pod details
kubectl logs <pod-name>       # View pod logs
kubectl delete pod <name>     # Delete a pod
```

#### In Our Project:

We use Kubernetes to:
- Run our containerized Express app
- Manage app lifecycle (start, stop, restart)
- Expose our app to the internet via LoadBalancer
- Scale our app if needed

---

### 6. What is AKS (Azure Kubernetes Service)?

**Azure Kubernetes Service (AKS)** is a managed Kubernetes service provided by Microsoft Azure. It simplifies deploying and managing Kubernetes clusters.

#### What Does "Managed" Mean?

Azure handles:
- **Control Plane**: Azure manages the Kubernetes master nodes
- **Updates**: Automatic Kubernetes version updates
- **Monitoring**: Built-in monitoring and logging
- **Scaling**: Easy cluster and node scaling
- **Security**: Integrated security features

#### AKS Benefits:

- **Simplified Management**: No need to manage Kubernetes control plane
- **Azure Integration**: Works seamlessly with other Azure services
- **Cost Effective**: Pay only for the worker nodes
- **Security**: Integrated with Azure Active Directory
- **Developer Tools**: kubectl, Helm, and other tools work out of the box

#### AKS Components:

1. **Control Plane**: Managed by Azure (you don't see it)
2. **Node Pools**: Worker nodes where your containers run
3. **Networking**: Virtual network integration
4. **Identity**: Managed identity for secure access

#### In Our Project:

We use AKS (`devops-aks`) to:
- Run our Kubernetes cluster
- Deploy our containerized application
- Manage our app's lifecycle
- Provide public access via LoadBalancer service

---

### 7. What is CI/CD?

**CI/CD** stands for **Continuous Integration** and **Continuous Deployment/Delivery**.

#### Continuous Integration (CI)

**CI** is the practice of automatically testing code changes as soon as they're committed to a repository.

**CI Process:**
1. Developer commits code
2. Automated build process starts
3. Automated tests run
4. If tests pass → code is integrated
5. If tests fail → developer is notified

**Benefits:**
- Catch bugs early
- Ensure code quality
- Prevent broken code from reaching production

#### Continuous Deployment/Delivery (CD)

**Continuous Delivery**: Code is always ready to deploy to production (but deployment is manual)

**Continuous Deployment**: Code is automatically deployed to production after passing tests

**CD Process:**
1. Code passes CI tests
2. Build Docker image
3. Push to container registry
4. Deploy to staging/production
5. Run smoke tests
6. Monitor deployment

**Benefits:**
- Faster time to market
- Reduced manual errors
- Frequent, small releases
- Easy rollback if issues occur

#### CI/CD Pipeline Flow:

```
Code Commit → Build → Test → Build Image → Push to Registry → Deploy → Monitor
     ↑                                                                      │
     └─────────────────────────── Feedback Loop ──────────────────────────┘
```

#### In Our Project:

Our GitHub Actions workflow (`azure-ci-cd.yml`) implements CI/CD:
- **CI**: Checks out code, builds Docker image
- **CD**: Pushes to ACR, deploys to AKS automatically

---

### 8. What is GitHub Actions?

**GitHub Actions** is a CI/CD platform built into GitHub that automates software workflows.

#### Key Concepts:

- **Workflow**: An automated process defined in a YAML file
- **Event**: Something that triggers a workflow (push, pull request, etc.)
- **Job**: A set of steps that run on the same runner
- **Step**: A single task in a job
- **Action**: Reusable units of code (like login, checkout, etc.)
- **Runner**: The machine that executes the workflow (GitHub-hosted or self-hosted)

#### Workflow Structure:

```yaml
name: Workflow Name
on: [push]              # Trigger event
jobs:
  job-name:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Hello World"
```

#### Why GitHub Actions?

- **Integrated**: Built into GitHub, no separate tool needed
- **Free**: Free for public repositories
- **Flexible**: Supports any language or platform
- **Marketplace**: Thousands of pre-built actions
- **Easy**: YAML-based configuration

#### In Our Project:

We use GitHub Actions to:
- Automatically build Docker images when code is pushed
- Push images to ACR
- Deploy to AKS
- Restart deployments with new images

---

### 9. What is Azure?

**Azure** is Microsoft's cloud computing platform that provides a wide range of cloud services.

#### Cloud Computing Basics:

Instead of buying and maintaining physical servers, you:
- **Rent** computing resources from a cloud provider
- **Pay** only for what you use
- **Scale** up or down as needed
- **Access** from anywhere with internet

#### Azure Services We Use:

1. **Azure Container Registry (ACR)**: Store Docker images
2. **Azure Kubernetes Service (AKS)**: Run Kubernetes clusters
3. **Azure Active Directory**: Authentication and authorization
4. **Azure Resource Groups**: Organize related resources

#### Why Azure?

- **Global**: Data centers worldwide
- **Secure**: Enterprise-grade security
- **Integrated**: Services work well together
- **Scalable**: Scale from small to massive
- **Cost-effective**: Pay-as-you-go pricing

---

### 10. What is YAML?

**YAML** (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files.

#### YAML Basics:

```yaml
# Comments start with #
key: value
number: 42
boolean: true
list:
  - item1
  - item2
nested:
  key: value
  another: value
```

#### Why YAML in DevOps?

- **Readable**: Easy for humans to read and write
- **Common**: Used by Kubernetes, Docker Compose, CI/CD tools
- **Structured**: Supports complex data structures
- **Standard**: Widely adopted in DevOps tooling

#### In Our Project:

We use YAML for:
- Kubernetes manifests (`deployment.yaml`, `service.yaml`)
- GitHub Actions workflows (`azure-ci-cd.yml`)
- Configuration files

---

### 11. What is kubectl?

**kubectl** is the command-line tool for interacting with Kubernetes clusters.

#### What kubectl Does:

- **Deploy**: Apply configurations to clusters
- **Inspect**: View cluster resources and status
- **Manage**: Create, update, delete resources
- **Debug**: View logs, describe resources
- **Scale**: Scale deployments up or down

#### kubectl Configuration:

kubectl uses a `kubeconfig` file that contains:
- Cluster information (server address)
- Authentication credentials
- Context (which cluster to use)

#### Getting Credentials:

```bash
# Get credentials for AKS
az aks get-credentials --resource-group <rg> --name <cluster>

# This updates your kubeconfig file
```

#### In Our Project:

We use kubectl to:
- Deploy our application to AKS
- Check deployment status
- View service information (get EXTERNAL-IP)
- Restart deployments

---

### 12. What is Express.js?

**Express.js** is a fast, minimalist web framework for Node.js.

#### What It Does:

- **HTTP Server**: Creates web servers that respond to HTTP requests
- **Routing**: Maps URLs to functions (routes)
- **Middleware**: Functions that process requests
- **Templates**: Can render HTML pages

#### Basic Express App:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
```

#### In Our Project:

We use Express to:
- Create a simple web server
- Handle HTTP requests
- Provide a health check endpoint
- Serve our application

---

### Component Interaction Summary

Here's how all components work together in our project:

```
┌──────────┐
│   Git    │ ← Version control
└────┬─────┘
     │
     ▼
┌──────────┐
│  GitHub  │ ← Code repository
└────┬─────┘
     │
     ▼
┌──────────────┐
│GitHub Actions│ ← CI/CD automation
└────┬─────────┘
     │
     ├──► ┌──────────┐
     │    │  Docker  │ ← Containerization
     │    └────┬─────┘
     │         │
     │         ▼
     │    ┌──────────┐
     │    │   ACR    │ ← Image registry
     │    └────┬─────┘
     │         │
     │         ▼
     └──► ┌──────────┐
          │   AKS    │ ← Kubernetes cluster
          └────┬─────┘
               │
               ▼
          ┌──────────┐
          │ Express  │ ← Web application
          └──────────┘
```

---

## 🔧 How DevOps Works

### The Three Pillars of DevOps

#### 1. **Culture** 🤝
- Developers and Operations talk to each other
- Everyone shares responsibility
- Learning from mistakes, not blaming

#### 2. **Practices** 📋
- **CI/CD** (Continuous Integration/Continuous Deployment)
  - CI = Every code change is automatically tested
  - CD = Every tested change can go to production automatically
- **Infrastructure as Code** = Servers defined in files (like recipes)
- **Monitoring** = Watching your app 24/7

#### 3. **Tools** 🛠️
- **Git** = Distributed version control system
- **Docker** = Containerization platform
- **Kubernetes** = Container orchestration platform
- **GitHub Actions** = CI/CD automation platform
- **Azure** = Cloud computing platform

### Our DevOps Pipeline (The Magic Flow)

```
┌─────────┐     ┌──────────┐     ┌──────────┐     ┌──────┐     ┌──────────┐
│ VS Code │ --> │  GitHub  │ --> │  GitHub  │ --> │  ACR  │ --> │   AKS    │
│ (Code)  │     │  (Store) │     │ Actions  │     │(Image)│     │(Kubernetes)
└─────────┘     └──────────┘     └──────────┘     └──────┘     └──────────┘
                                                      │              │
                                                      └──────────────┘
                                                         Deploy!
```

**In Simple Words:**
1. You write code in VS Code
2. You save it to GitHub (like saving to Google Drive)
3. GitHub Actions (a robot) sees your change
4. The robot builds your app into a Docker image
5. The robot saves the image to Azure Container Registry (ACR)
6. The robot tells Kubernetes (AKS) to run your app
7. Your app is now live on the internet! 🌐

---

## 📁 Our Project Structure

Let's explore what each file does in our project:

```
devops/
│
├── 📄 server.js              # Our web application
├── 📄 package.json           # App dependencies and scripts
├── 📄 Dockerfile             # Instructions to build a container
├── 📄 .gitignore             # Files Git should ignore
│
├── 📁 k8s/                   # Kubernetes configuration
│   ├── deployment.yaml       # How to run our app
│   └── service.yaml          # How to expose our app
│
└── 📁 .github/
    └── 📁 workflows/
        └── azure-ci-cd.yml   # Automation pipeline
```

### File-by-File Explanation

#### 1. `server.js` - The Heart of Our App

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello from AKS 🚀 v1"));
app.get("/health", (req, res) => res.json({ status: "ok", version: "v1" }));

app.listen(PORT, "0.0.0.0", () => console.log("Running on " + PORT));
```

**What it does:**
- Creates a web server using Express (a Node.js framework)
- Listens on port 3000
- Has two routes:
  - `/` = Shows "Hello from AKS 🚀 v1"
  - `/health` = Shows app status (used by Kubernetes to check if app is healthy)

**Purpose:**
- Main route (`/`) = Displays welcome message to users
- Health check (`/health`) = Kubernetes uses this to verify the app is running correctly

#### 2. `package.json` - App Recipe

```json
{
  "name": "y",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Tests passed ✅\""
  },
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

**What it does:**
- Lists project dependencies and their versions
- `express` = The library that helps us make a web server
- `scripts` = Commands we can run (like `npm test`)

**Purpose:**
- Defines project dependencies (Express library)
- Provides scripts for common tasks (testing, starting)

#### 3. `Dockerfile` - Container Instructions

```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

**What it does (line by line):**
- `FROM node:20-alpine` = Start with a lightweight Node.js base image
- `WORKDIR /app` = Set working directory to `/app`
- `COPY package*.json ./` = Copy package files first (for better caching)
- `RUN npm install` = Install all dependencies
- `COPY . .` = Copy application code into the container
- `EXPOSE 3000` = Document that the app listens on port 3000
- `CMD ["npm", "start"]` = Command to run when container starts

**Docker Layer Caching:**
By copying `package.json` first and running `npm install` before copying code, Docker can cache the dependency installation layer. This speeds up rebuilds when only code changes.

#### 4. `k8s/deployment.yaml` - How to Run Our App

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: devops-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: devops
  template:
    metadata:
      labels:
        app: devops
    spec:
      containers:
        - name: devops
          image: acedevopsdemoacr.azurecr.io/devops:latest
          ports:
            - containerPort: 3000
```

**What it does:**
- Tells Kubernetes: "Run 1 copy of our app"
- Uses the image from ACR (Azure Container Registry)
- Opens port 3000

**Purpose:**
- Defines how many replicas (copies) of the app to run
- Specifies which container image to use
- Configures container ports
- Sets up labels for service discovery

#### 5. `k8s/service.yaml` - How to Expose Our App

```yaml
apiVersion: v1
kind: Service
metadata:
  name: devops-service
spec:
  type: LoadBalancer
  selector:
    app: devops
  ports:
    - port: 80
      targetPort: 3000
```

**What it does:**
- Creates a LoadBalancer (gives us a public IP address)
- Routes traffic from port 80 (internet) to port 3000 (our app)

**Purpose:**
- Creates a LoadBalancer service type (provides external IP)
- Routes external traffic (port 80) to container port (3000)
- Uses label selector to find the correct pods
- Enables public internet access to the application

#### 6. `.github/workflows/azure-ci-cd.yml` - The Automation Robot

```yaml
name: AKS Full CI/CD (Build -> Push -> Deploy)

on:
  push:
    branches: ["master"]

jobs:
  build-push-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Azure Login
        uses: azure/login@v2
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      
      - name: Login to ACR
        run: az acr login --name acedevopsdemoacr
      
      - name: Build image
        run: docker build -t acedevopsdemoacr.azurecr.io/devops:latest .
      
      - name: Push image
        run: docker push acedevopsdemoacr.azurecr.io/devops:latest
      
      - name: Get AKS credentials
        run: az aks get-credentials -g chainsure -n devops-aks --overwrite-existing
      
      - name: Apply manifests
        run: kubectl apply -f k8s/
      
      - name: Rollout restart
        run: |
          kubectl rollout restart deployment/devops-app
          kubectl rollout status deployment/devops-app
```

**What it does (step by step):**
1. **Triggers:** When you push to `master` branch
2. **Checkout:** Gets your code
3. **Azure Login:** Logs into Azure (using secrets)
4. **Login to ACR:** Connects to container registry
5. **Build image:** Creates Docker image
6. **Push image:** Saves image to ACR
7. **Get AKS credentials:** Connects to Kubernetes
8. **Apply manifests:** Deploys your app
9. **Rollout restart:** Restarts to use new image

**Automation Benefits:**
- Eliminates manual deployment steps
- Ensures consistent deployment process
- Reduces human error
- Enables rapid iteration and updates

#### 7. `.gitignore` - Files to Ignore

```
node_modules
```

**What it does:**
- Tells Git: "Don't track `node_modules` folder"
- Why? It's huge and can be regenerated with `npm install`

**Purpose:** Prevents unnecessary files from being tracked in version control, keeping the repository clean and focused on source code.

---

## 🎓 Step-by-Step Workshop Guide

### 🎯 Workshop Rules (Read First!)

**Where we work:**
- 🟢 **VS Code** → Writing code
- 🟢 **GitHub UI** → Repository, Actions, and secrets
- 🟢 **Azure Portal** → Visual confirmation only
- 🟢 **Azure Cloud Shell (Terminal)** → ALL Azure + kubectl commands
- ❌ **NO** local kubectl, NO local Azure CLI installs

**Remember:** Everything infrastructure-related happens in Azure Cloud Shell!

---

### 📍 A) GitHub Setup (GitHub Website)

**Where:** Browser → github.com  
**Why:** GitHub is where our code lives and where automation starts

#### A1) Create GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up (if you don't have an account)
3. Verify your email

#### A2) Fork the Repository

1. Open: `https://github.com/AjnasNB/devops`
2. Click the **Fork** button (top right)
3. Create your fork

**Why fork?**
> "Everyone works independently. No conflicts. Same pipeline, but your own copy!"

---

### 📍 B) VS Code + Clone (Your Computer)

**Where:** VS Code  
**Why:** This is where developers write code

```bash
git clone https://github.com/<your-username>/devops.git
cd devops
code .
```

**What happened:**
- Downloaded the project to your computer
- Opened it in VS Code

---

### 📍 C) Understanding the App (VS Code)

**Where:** VS Code  
**Why:** We need to understand what we're deploying

#### C1) Explore the Files

Look at:
- `server.js` - Our web app
- `package.json` - Dependencies
- `Dockerfile` - Container instructions

#### C2) Optional: Test Locally

```bash
npm install
npm test
npm start
```

Then visit: `http://localhost:3000`

**What you'll see:** "Hello from AKS 🚀 v1"

**Stop the server:** Press `Ctrl+C`

---

### 📍 D) Azure Login (First Time Only)

**Where:** Azure Portal → Cloud Shell (Bash)  
**Why:** We need to authenticate to use Azure services

1. Go to [portal.azure.com](https://portal.azure.com)
2. Click the **Cloud Shell** icon (top bar) → Choose **Bash**

```bash
az login
```

Follow the prompts to log in.

**If already logged in:** You can skip this step!

---

### 📍 E) Create/Verify ACR (Azure Container Registry)

**Where:** Azure Cloud Shell  
**Why:** We need a secure, private repository to store our Docker images

#### E1) Check if ACR Exists

```bash
az acr show \
  --name acedevopsdemoacr \
  --resource-group chainsure
```

**If it exists:** ✅ Great! Move to next step.

**If it doesn't exist:** Create it:

```bash
az acr create \
  --resource-group chainsure \
  --name acedevopsdemoacr \
  --sku Basic
```

**What is ACR?**
> "ACR = Private Docker Hub for Azure. It's where we store our app images securely."

**What happened:**
- Created a container registry named `acedevopsdemoacr`
- This is where our Docker images will live

---

### 📍 F) Create AKS (Azure Kubernetes Service)

**Where:** Azure Cloud Shell  
**Why:** Kubernetes runs our containers  
**Important:** We ONLY use Azure Terminal for this (as requested)

#### F1) Create AKS with ACR Attached

```bash
az aks create \
  --resource-group chainsure \
  --name devops-aks \
  --location centralindia \
  --node-count 1 \
  --node-vm-size Standard_B2s_v2 \
  --enable-managed-identity \
  --attach-acr acedevopsdemoacr \
  --generate-ssh-keys1
```

**What each part does:**
- `--resource-group chainsure` = Which group to put it in
- `--name devops-aks` = Name of our cluster
- `--node-count 1` = One worker node (cheap for demo)
- `--enable-managed-identity` = No passwords needed (secure)
- `--attach-acr acedevopsdemoacr` = AKS can pull images from ACR automatically
- `--generate-ssh-keys` = Creates keys for secure access

**⏳ This takes 5-7 minutes!** Be patient. ☕

**Why these settings?**
- Managed identity → No passwords to manage
- Attach ACR → AKS can pull private images automatically
- Node count 1 → Cheap and perfect for learning

---

### 📍 G) Configure kubectl (Critical Step!)

**Where:** Azure Cloud Shell  
**Why:** kubectl is how we talk to Kubernetes  
**Where kubectl lives:** Already installed in Cloud Shell!

#### G1) Get AKS Credentials

```bash
az aks get-credentials \
  --resource-group chainsure \
  --name devops-aks
```

**What this does:**
> "This command writes cluster access details into kubeconfig. From now on, kubectl knows **which cluster to talk to** and has the authentication credentials needed to connect."

**Technical Details:** The command updates your `~/.kube/config` file with cluster endpoint, authentication certificates, and context information.

#### G2) Verify Connection

```bash
kubectl get nodes
```

**Expected output:**
```
NAME                                STATUS   ROLES   AGE   VERSION
aks-nodepool1-xxxxx-0              Ready    agent   5m    v1.xx.x
```

**If you see nodes:** ✅ Cluster is ready!

**If you see an error:** Check that AKS creation completed.

---

### 📍 H) Kubernetes Manifests (VS Code)

**Where:** VS Code  
**Why:** Kubernetes needs YAML files to know how to run our app

The files are already created! Let's understand them:

#### H1) Deployment (`k8s/deployment.yaml`)

This tells Kubernetes:
- Run 1 copy (replica) of our app
- Use the image from ACR
- Open port 3000

#### H2) Service (`k8s/service.yaml`)

This tells Kubernetes:
- Create a LoadBalancer (public IP)
- Route port 80 → port 3000

#### H3) Commit and Push

```bash
git add .
git commit -m "add k8s manifests"
git push
```

**What happened:**
- Saved changes to Git
- Pushed to GitHub

---

### 📍 I) Create Service Principal (Azure Terminal)

**Where:** Azure Cloud Shell  
**Why:** GitHub Actions needs permission to deploy to Azure

```bash
az ad sp create-for-rbac \
  --name github-actions-devops-aks \
  --role contributor \
  --scopes /subscriptions/476bde81-c61f-412c-a2dd-6172f1e39678 \
  --sdk-auth
```

**⚠️ IMPORTANT:** Copy the **FULL JSON** output! It looks like:

```json
{
  "clientId": "...",
  "clientSecret": "...",
  "subscriptionId": "...",
  "tenantId": "...",
  ...
}
```

**What is a Service Principal?**
> "A service principal is an identity used by applications, services, and automation tools (like GitHub Actions) to access Azure resources. It's similar to a user account, but designed for non-human access."

**Save this JSON** - you'll need it in the next step!

---

### 📍 J) GitHub Secrets (GitHub UI)

**Where:** GitHub Repo → Settings  
**Why:** We need to store credentials securely

#### Steps:

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Create secret:

| Name                | Value                    |
| ------------------- | ------------------------ |
| `AZURE_CREDENTIALS` | (Paste the full JSON from step I) |

6. Click **Add secret**

**Why secrets?**
> "Secrets are encrypted and only GitHub Actions can use them. Never commit secrets to code!"

---

### 📍 K) GitHub Actions Pipeline (VS Code)

**Where:** VS Code  
**Why:** This is our automation pipeline

The file `.github/workflows/azure-ci-cd.yml` is already created!

**What it does:**
1. Triggers on push to `master`
2. Checks out code
3. Logs into Azure
4. Builds Docker image
5. Pushes to ACR
6. Deploys to AKS

#### Commit and Push

```bash
git add .
git commit -m "add aks ci/cd"
git push
```

---

### 📍 L) First Deploy (Automatic!)

**Where:** GitHub → Actions tab  
**Why:** Watch the magic happen!

1. Go to your GitHub repository
2. Click **Actions** tab
3. You'll see a workflow run starting!

**Watch the stages:**
1. ✅ Checkout
2. ✅ Azure login
3. ✅ Docker build
4. ✅ Push to ACR
5. ✅ kubectl apply
6. ✅ Rollout restart

**⏳ Takes 2-3 minutes**

**What's happening:**
> "Every step is automated! No human needed. This is DevOps in action!"

---

### 📍 M) Get Public URL (Azure Terminal)

**Where:** Azure Cloud Shell  
**Why:** We need the public IP to access our app

```bash
kubectl get svc
```

**Wait for EXTERNAL-IP** (might show `<pending>` first)

**Expected output:**
```
NAME             TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)
devops-service   LoadBalancer   10.x.x.x     20.x.x.x         80:xxxxx/TCP
```

**Copy the EXTERNAL-IP** and open in browser:
```
http://<EXTERNAL-IP>/
```

**You should see:** "Hello from AKS 🚀 v1" 🎉

---

### 📍 N) Live Change Demo (The Best Part!)

**Where:** VS Code → GitHub → Browser  
**Why:** Show how easy DevOps makes updates

#### N1) Make a Change

Edit `server.js`:

```javascript
app.get("/", (req, res) => res.send("Hello from AKS 🚀 v2"));
```

#### N2) Commit and Push

```bash
git add .
git commit -m "update to v2"
git push
```

#### N3) Watch GitHub Actions

1. Go to **Actions** tab
2. Watch the pipeline run automatically!

#### N4) Wait and Refresh Browser

After 2-3 minutes, refresh your browser.

**You should see:** "Hello from AKS 🚀 v2"

**Say this:**
> "This is a production update with one git push. No manual steps. This is DevOps!"

---

## 🔑 Key Concepts Explained

### Component Relationships

All these components work together to create a complete DevOps pipeline. Refer to the [Base Components Explained](#base-components-explained) section above for detailed explanations of:
- Git and version control
- Docker and containers
- Kubernetes and orchestration
- ACR (Azure Container Registry)
- AKS (Azure Kubernetes Service)
- CI/CD concepts
- GitHub Actions
- Azure cloud services

---

## 🚀 The Future of DevOps

### Current Trends (2025-2026)

#### 1. **AI-Powered DevOps (AIOps)**
- AI helps find problems before they happen
- AI writes code, tests, and fixes bugs
- Example: GitHub Copilot, ChatGPT for code

#### 2. **GitOps**
- Everything (code, infrastructure) in Git
- Git becomes the single source of truth
- Changes tracked, audited, reversible

#### 3. **Serverless**
- No servers to manage
- Pay only for what you use
- Example: Azure Functions, AWS Lambda

#### 4. **Multi-Cloud**
- Apps run on multiple clouds (Azure, AWS, GCP)
- No vendor lock-in
- Better reliability

#### 5. **Security as Code (DevSecOps)**
- Security built into every step
- Automated security scanning
- "Shift left" = Find security issues early

### What to Learn Next

#### For Beginners:
1. ✅ **Git** - Version control (you're using it!)
2. ✅ **Docker** - Containers (you're using it!)
3. ✅ **Kubernetes** - Orchestration (you're using it!)
4. ✅ **CI/CD** - Automation (you're using it!)
5. 📚 **Linux basics** - Most servers run Linux
6. 📚 **YAML** - Configuration files (you're using it!)

#### For Intermediate:
1. **Terraform** - Infrastructure as Code
2. **Ansible** - Configuration management
3. **Prometheus + Grafana** - Monitoring
4. **Helm** - Kubernetes package manager
5. **Jenkins** - Alternative CI/CD tool

#### For Advanced:
1. **Service Mesh** (Istio, Linkerd)
2. **Cloud-native patterns**
3. **Chaos Engineering**
4. **Advanced Kubernetes** (operators, CRDs)
5. **Multi-cloud strategies**

### Career Path in DevOps

```
Junior DevOps Engineer
    ↓
DevOps Engineer
    ↓
Senior DevOps Engineer
    ↓
DevOps Architect / SRE (Site Reliability Engineer)
    ↓
DevOps Lead / Engineering Manager
```

**Salary Range (2025):**
- Junior: $60k - $90k
- Mid-level: $90k - $130k
- Senior: $130k - $180k
- Architect: $150k - $250k+

**Skills in Demand:**
- Kubernetes ✅
- CI/CD ✅
- Cloud (Azure, AWS, GCP)
- Infrastructure as Code
- Monitoring & Observability
- Security

---

## 🎯 Key Takeaways

### What You Learned Today

1. ✅ **What DevOps is:** Development + Operations working together
2. ✅ **Why DevOps matters:** Faster, safer, automated deployments
3. ✅ **How DevOps works:** Code → Build → Test → Deploy automatically
4. ✅ **Real implementation:** You deployed a real app to Kubernetes!
5. ✅ **Tools you used:**
   - Git & GitHub
   - Docker
   - Kubernetes (AKS)
   - GitHub Actions
   - Azure Cloud

### The DevOps Mindset

1. **Automate Everything** 🤖
   - If you do it twice, automate it

2. **Fail Fast, Learn Fast** 🚀
   - Find problems early
   - Learn from mistakes

3. **Collaboration** 🤝
   - Developers + Operations = One team

4. **Continuous Improvement** 📈
   - Always getting better
   - Measure, learn, improve

5. **Security First** 🔒
   - Security built-in, not added later

### One Line Summary

> **DevOps = Automating the path from code to production, with collaboration and continuous improvement.**

---

## 🆘 Troubleshooting

### Problem: AKS creation fails

**Solution:**
- Check you have permissions in Azure
- Verify resource group exists
- Try a different region

### Problem: kubectl can't connect

**Solution:**
```bash
az aks get-credentials --resource-group chainsure --name devops-aks --overwrite-existing
```

### Problem: EXTERNAL-IP shows `<pending>`

**Solution:**
- Wait 2-3 minutes (LoadBalancer takes time)
- Check with: `kubectl get svc -w` (watch mode)

### Problem: Image pull error

**Solution:**
- Verify ACR is attached: `az aks show -g chainsure -n devops-aks --query "servicePrincipalProfile"`
- Check image exists: `az acr repository list --name acedevopsdemoacr`

### Problem: GitHub Actions fails

**Solution:**
- Check `AZURE_CREDENTIALS` secret is set correctly
- Verify service principal has correct permissions
- Check Actions logs for specific errors

---

## 📚 Additional Resources

### Official Documentation
- [Azure AKS Docs](https://docs.microsoft.com/azure/aks/)
- [Kubernetes Docs](https://kubernetes.io/docs/)
- [Docker Docs](https://docs.docker.com/)
- [GitHub Actions Docs](https://docs.github.com/actions)

### Learning Paths
- [Microsoft Learn - DevOps](https://learn.microsoft.com/devops/)
- [Kubernetes Tutorial](https://kubernetes.io/docs/tutorials/)
- [Docker Getting Started](https://docs.docker.com/get-started/)

### Practice
- [Katacoda](https://www.katacoda.com/) - Interactive tutorials
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Free K8s playground
- [Azure Free Account](https://azure.microsoft.com/free/) - $200 credit

---

## 👨‍🏫 About the Author

**Ajnas N B**  
**Founder, Cognifyr.CO**

This handbook is part of the **"Demystifying DevOps"** workshop series, designed to make DevOps accessible to everyone, regardless of experience level.

**Contact:**
- Website: [Cognifyr.CO](https://cognifyr.co)
- GitHub: [@AjnasNB](https://github.com/AjnasNB)

---

## 📝 License

This project and handbook are provided for educational purposes.

---

## 🙏 Thank You!

Congratulations on completing this DevOps journey! You've:
- ✅ Learned what DevOps is
- ✅ Understood why it matters
- ✅ Deployed a real application
- ✅ Set up a complete CI/CD pipeline

**Keep learning, keep building, keep deploying!** 🚀

---

**Last Updated:** January 2025  
**Version:** 1.0
