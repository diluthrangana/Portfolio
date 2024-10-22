pipeline {
    agent any
    
    tools {
        nodejs 'Node 14' // Ensure NodeJS is installed and available in Jenkins
    }

    environment {
        DOCKER_IMAGE = 'react-portfolio1' // Define your Docker image name
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/diluthrangana/Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the dependencies for your React project
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build the React project (creates production-ready files in the build folder)
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in the project
                    docker.build("${env.DOCKER_IMAGE}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container locally and map port 3000 from the container to the host
                    docker.image("${env.DOCKER_IMAGE}").run('-d -p 3000:3000')
                }
            }
        }
    }
    
    post {
        always {
            // Clean up after the build (optional, for example stopping containers)
            script {
                // Stop all running containers with this image
                sh 'docker ps -q --filter "ancestor=${env.DOCKER_IMAGE}" | xargs -r docker stop'
            }
        }
    }
}
