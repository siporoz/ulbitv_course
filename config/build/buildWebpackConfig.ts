import webpack from "webpack";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import path from 'path'
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders()
    },
    // Убирает сокращенное название
    resolve: buildResolvers(),
    plugins: buildPlugins(options)
  };
}