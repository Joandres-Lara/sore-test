/**
 * Configuración para el present de @babel/preset-env.
 *
 * @var {object} configPresetBabelEnv
 */
const configPresetBabelEnv = {
 targets: 'current',
 useBuiltIns: 'usage',
};
/*
 * Configuración para babel
 *
 * @var {function}
 */
module.exports = function configureBabel(api){
 api.cache(false);

 return {
  presets: [
   require('@babel/preset-env', configPresetBabelEnv),
   require('@babel/preset-react')
  ],
  plugins: [
   require('@babel/plugin-transform-react-jsx-source'),
   require('@babel/plugin-syntax-jsx')
  ]
 }
}
