FROM eclipse-temurin:21-jdk

# Copy the JAR from the backend folder itself
COPY complaint-0.0.1-SNAPSHOT.jar /app/app.jar

# Create the upload folder
RUN mkdir -p /app/files
VOLUME /app/files

WORKDIR /app
ENTRYPOINT ["java", "-jar", "app.jar"]
