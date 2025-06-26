FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the JAR from the backend folder itself
COPY complaint-0.0.1-SNAPSHOT.jar /app/app.jar

# Create the upload folder
RUN mkdir -p /app/files
VOLUME /app/files
RUN chmod -R 777 /app/files

EXPOSE 8181


ENTRYPOINT ["java", "-jar", "app.jar"]
