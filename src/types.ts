export type RootStackParamList = {
  Details: {codigo_unico_inversion: string};
  Graphic: {graphData: {label: string; count: number}[]};
};

export interface Project {
  id: number;
  codigo_unico_inversion: string;
  codigo_sinip: string;
  nombre_inversion: string;
  monto_viable: string;
  monto_f15: string;
  monto_f16: string;
  monto_f17: string;
  costo_actualizado: string;
  funcion: string;
  programa: string;
  subprograma: string;
  situacion: string;
  estado_inversion: string;
  nivel_gobierno: string;
  sector: string;
  entidad: string;
  unidad_opmi: string;
  unidad_uei: string;
  unidad_uf: string;
  responsable_opmi: string;
  responsable_uei: string;
  responsable_uf: string;
  entidad_opi: string;
  responsable_opi: string;
  ejecutora: string;
  fecha_registro: string;
  ultimo_estudio: string;
  estado_estudio: string;
  nivel_viabilidad: string;
  responsable_viabilidad: string;
  fecha_viabilidad: string;
  con_f15: string;
  descripcion_alternativa: string;
  beneficiarios: number;
  pim_ano_vigente: string;
  devengado_ano_vigente: string;
  devengado_acumulado: string;
  cerrado: string;
  marco: string;
  tipo_formato: string;
  devengado_acumulado_ano_anterior: string;
  saldo_por_financiar: string;
  mes_ano_primer_devengado: string;
  mes_ano_ultimo_devengado: string;
  incluido_programacion_pmi: string;
  incluido_ejecucion_pmi: string;
  ganador_foniprel: string;
  departamento: string;
  provincia: string;
  centro_poblado: string;
}
