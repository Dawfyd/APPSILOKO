package com.sb.siloko.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

// Url para acceder a el swagger
//http://localhost:8888/swagger-ui.html#/

/**
 * Configuracion de Swagger para la firma de la API
 * @author David Hoyos
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select().apis(RequestHandlerSelectors.basePackage("com.sb.siloko"))
                .paths(PathSelectors.any())
                .build();
    }

}