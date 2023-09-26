import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    // Файлы которые нужно смотреть ts, tsx,
    test: /\.tsx?$/,
    // Модуль который их будет обрабатывать
    use: 'ts-loader',
    // Исключаем нодемодулес
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
  ]
}