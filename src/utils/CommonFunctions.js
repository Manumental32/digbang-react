export const formatPrice = (value) => {
  return value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
};
