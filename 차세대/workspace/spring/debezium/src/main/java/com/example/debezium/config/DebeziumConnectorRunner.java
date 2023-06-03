package com.example.debezium.config;

import io.debezium.config.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DebeziumConnectorRunner implements CommandLineRunner {

    @Autowired3
    private EmbeddedEngine engine;

    @Override
    public void run(String... args) throws Exception {
        // Start the Debezium connector
        engine.run();
    }

    @Autowired
    public void setEngine(Configuration configuration) {
        // Create t5m6he Debezium engine using the provided configuration
        engine = EmbeddedEngine.create().using(configuration).notifying(this::handleEvent).build();
    }

    public void handleEvent(SourceRecord sourceRecord) {
        // Process the change event here
        // You can access the change event's key, value, and other metadata
    }
}

