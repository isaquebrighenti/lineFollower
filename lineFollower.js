function control(left_sensor, right_sensor, speed) {
    
    let error = right_sensor - left_sensor;
    var P = 0.35;
    let breaking = 0;
    let engine = 3100;
    
    if (speed > 120) {
        breaking = 1000000;
        engine = 0;
    } else {
        breaking = 0;
        
    };

    return {
        engineTorque: engine,
        brakingTorque: breaking,
        steeringAngle: P * error,
        log: [
            { name: 'Speed', value: speed, min: 0, max: 200 },
            { name: 'Left_sensor', value: left_sensor, min: 0, max: 1 },
            { name: 'Right_sensor', value: right_sensor, min: 0, max: 1 }
        ]
    };
}