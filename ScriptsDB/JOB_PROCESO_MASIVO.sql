BEGIN
    DBMS_SCHEDULER.CREATE_JOB (
            job_name => '"SILOKO"."PROCESO_MASIVO_JOB"',
            job_type => 'STORED_PROCEDURE',
            job_action => 'SILOKO.PROCESO_MASIVO.ORQUESTADOR_CUPO',
            number_of_arguments => 1,
            start_date => TO_TIMESTAMP_TZ('2021-07-12 12:20:35.000000000 AMERICA/BOGOTA','YYYY-MM-DD HH24:MI:SS.FF TZR'),
            repeat_interval => 'FREQ=MONTHLY;BYTIME=000000;BYMONTHDAY=1',
            end_date => NULL,
            enabled => FALSE,
            auto_drop => FALSE,
            comments => 'Llama al proceso masivo ');

         
     
 
    DBMS_SCHEDULER.SET_ATTRIBUTE( 
             name => '"SILOKO"."PROCESO_MASIVO_JOB"', 
             attribute => 'store_output', value => TRUE);
    DBMS_SCHEDULER.SET_ATTRIBUTE( 
             name => '"SILOKO"."PROCESO_MASIVO_JOB"', 
             attribute => 'logging_level', value => DBMS_SCHEDULER.LOGGING_FULL);
      
   
  
    
    DBMS_SCHEDULER.enable(
             name => '"SILOKO"."PROCESO_MASIVO_JOB"');
END;