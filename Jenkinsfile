pipeline {
    agent any
    
    environment {
        DOCKER_REPO = 'diluthrangana/react-portfolio'
    }

    stages {
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/diluthrangana/Portfolio.git'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat "docker build -t %DOCKER_REPO%:%BUILD_NUMBER% ."
                bat "docker tag %DOCKER_REPO%:%BUILD_NUMBER% %DOCKER_REPO%:latest"
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub_password', variable: 'DOCKER_PASSWORD')]) {
                    bat "echo %DOCKER_PASSWORD% | docker login -u diluthrangana --password-stdin"
                }
            }
        }
        stage('Push Image') {
            steps {
                bat "docker push %DOCKER_REPO%:%BUILD_NUMBER%"
                bat "docker push %DOCKER_REPO%:latest"
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
