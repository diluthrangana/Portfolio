pipeline {
    agent any
    
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
                bat 'docker build -t adomicarts/react-portfolio:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub_password', variable: 'DOCKER_PASSWORD')]) {
                    script {
                        bat "docker login -u adomicarts -p %DOCKER_PASSWORD%"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push adomicarts/react-portfolio:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
