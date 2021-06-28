SET SERVEROUTPUT ON;

DECLARE
      estado number;
      
BEGIN -- Funcion PL Principal

     proceso_masivo.orquestador_cupo(estado);

end;