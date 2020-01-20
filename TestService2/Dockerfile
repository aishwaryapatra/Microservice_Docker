FROM openjdk
WORKDIR /usr/src

COPY ./target/TestService2-0.0.1-SNAPSHOT.jar TestService2-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/TestService2-0.0.1-SNAPSHOT.jar"]