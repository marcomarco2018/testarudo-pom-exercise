pipeline {
    agent any

    stages {
        stage('Clone Repository') {
        
                
             steps {
                // Clone the repository
                git branch: 'main',
                    credentialsId: 'testarudo-jenkins',
                    url: 'https://github.com/marcomarco2018/testarudo-pom-exercise.git'
               }
            }
            
       
         stage('Instalar Dependencias') {
        
                
             steps {
                
               bat """
                    call npm install
                    call npx playwright install
                """
               
               }
            }
       
       
       stage ('Correr tests') {
           
           
           steps {
              
                
                // Run tests with specific report location
                bat 'npx playwright test --reporter=html'
           }
       }
       
       
       
       stage('Publicar Reporte') {
           
           
           steps {
               
              publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                reportTitles: ''
            ])
               
           }
       }
       
       
       
            
            } 
        }
    