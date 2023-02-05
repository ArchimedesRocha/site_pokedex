// ///////////////////////////////////////////////////
// ======>>  Plugins Usados
// ///////////////////////////////////////////////////
const gulp = require("gulp");
const del = require("del");
const wait = require("gulp-wait");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const notify = require("gulp-notify");
const cache = require("gulp-cache");
const image = require("gulp-image");

// ///////////////////////////////////////////////////
// ======>>  Deletando Dist
// ///////////////////////////////////////////////////
const clean = () => {
  return del(["build-front-end/**"]);
};
gulp.task("del-build-front", clean);

// ///////////////////////////////////////////////////
// ======>>  Configurando os diretórios
// ///////////////////////////////////////////////////
const dest = "./build-front-end/";
const destBack = "./build-back-end/";
const frontEnd = "./src/front-end/";
const backEnd = "./src/back-end/";
const paths = {
  backEnd: {
    entry: backEnd + "**",
    output: destBack,
  },
  backEndAssets: {
    entry: dest + "assets/**",
    output: destBack + "/assets",
  },
  backEndToTheme: {
    entry: destBack + "**",
    output: "../",
  },
  html: {
    entry: frontEnd + "*.html",
    output: dest + "/",
  },
  cssPlugins: {
    entry: frontEnd + "assets/css/lib/*.css",
    output: dest + "assets/css/lib/",
  },
  scss: {
    entry: frontEnd + "assets/scss/**/*.scss",
    output: dest + "assets/css/",
  },
  js: {
    entry: frontEnd + "assets/js/scripts/*.js",
    output: dest + "assets/js/",
  },
  jsPlugins: {
    entry: frontEnd + "assets/js/lib/*.js",
    output: dest + "assets/js/lib/",
  },
  images: {
    entry: frontEnd + "assets/img/**/*.{png,jpg,gif,webp,svg}",
    output: dest + "assets/img/",
  },
  cloneFonts: {
    entry: frontEnd + "assets/css/lib/fonts/*",
    output: dest + "/assets/css/lib/fonts",
  },
};

// ////////////////////////////////////////////////
// ======>> Dev Tasks FrontEnd
// ////////////////////////////////////////////////
gulp.task("clone-front-end", function () {
  // Gulp clone FrontEnd
  gulp
    .src(paths.cloneFonts.entry)
    .pipe(wait(3000))
    .pipe(gulp.dest(paths.cloneFonts.output));
});

// ////////////////////////////////////////////////
// ======>> Dev Tasks BackEnd
// ////////////////////////////////////////////////
gulp.task("clone-back-end", function () {
  // Gulp clone BackEnd
  gulp
    .src(paths.backEnd.entry)
    .pipe(wait(3000))
    .pipe(gulp.dest(paths.backEnd.output));
});

gulp.task("clone-back-end-assets", function () {
  // Gulp clone BackEnd Assets
  gulp
    .src(paths.backEndAssets.entry)
    .pipe(gulp.dest(paths.backEndAssets.output));
});

gulp.task("clone-back-end-to-theme", function () {
  // Gulp clone BackEnd Assets
  gulp
    .src(paths.backEndToTheme.entry)
    .pipe(gulp.dest(paths.backEndToTheme.output));
});

// ///////////////////////////////////////////////////
// ======>>  Compilando o HTML, e dando refresh
// ///////////////////////////////////////////////////
function compilaHTML() {
  return gulp
    .src(paths.html.entry)
    .pipe(wait(3000))
    .pipe(
      htmlmin({
        collapsewhitespace: true,
      })
    )
    .pipe(gulp.dest(paths.html.output))
    .pipe(browserSync.stream());
}
gulp.task("html", compilaHTML);

// ///////////////////////////////////////////////////
// ======>>  Compilando o SASS, e dando refresh
// ///////////////////////////////////////////////////
function compilaSass() {
  return gulp
    .src(paths.scss.entry)
    .pipe(wait(3000))
    .pipe(sass({ outputStyle: "compressed" }))
    .on(
      "error",
      notify.onError({
        title: "DEU ERRO NO SCSS",
        message: "<%= error.message %>",
      })
    )
    .pipe(gulp.dest(paths.scss.output))
    .pipe(browserSync.stream());
}
gulp.task("sass", compilaSass);

// ///////////////////////////////////////////////////
// ======>>  Compilando o CSS, LIBS EXTERNAS e dando refresh
// ///////////////////////////////////////////////////
function pluginsCSS() {
  return gulp
    .src(paths.cssPlugins.entry)
    .pipe(wait(3000))
    .pipe(concat("plugins.css"))
    .pipe(gulp.dest(paths.cssPlugins.output))
    .pipe(browserSync.stream());
}
gulp.task("plugincss", pluginsCSS);

// ///////////////////////////////////////////////////
// ======>>  Compilando o JS, e dando refresh
// ///////////////////////////////////////////////////
function gulpJs() {
  return gulp
    .src(paths.js.entry)
    .pipe(wait(3000))
    .pipe(concat("all.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream());
}
gulp.task("alljs", gulpJs);

// ///////////////////////////////////////////////////
// ======>>  Compilando o JS, LIBS EXTERNAS e dando refresh
// ///////////////////////////////////////////////////
function pluginsJs() {
  return gulp
    .src(paths.jsPlugins.entry)
    .pipe(wait(3000))
    .pipe(concat("plugins.js"))
    .pipe(gulp.dest(paths.jsPlugins.output))
    .pipe(browserSync.stream());
}
gulp.task("pluginjs", pluginsJs);

// ///////////////////////////////////////////////////
// ======>>  Compilando e otimizando IMAGENS
// ///////////////////////////////////////////////////
function compilarImagens() {
  return gulp
    .src(paths.images.entry)
    .pipe(wait(1000))
    .pipe(
      cache(
        image({
          optipng: ["-i 1", "-strip all", "-fix", "-o7", "-force"],
          pngquant: ["--speed=1", "--force", 256],
          zopflipng: ["-y", "--lossy_8bit", "--lossy_transparent"],
          jpegRecompress: [
            "--strip",
            "--quality",
            "medium",
            "--min",
            40,
            "--max",
            60,
          ],
          mozjpeg: ["-optimize", "-progressive"],
          gifsicle: ["--optimize"],
          svgo: ["--enable", "cleanupIDs", "--disable", "convertColors"],
        })
      )
    )
    .pipe(gulp.dest(paths.images.output));
}
gulp.task("img", compilarImagens);

// ///////////////////////////////////////////////////
// ======>>  SERVER FRONT
// ///////////////////////////////////////////////////
function browser() {
  browserSync.init({
    server: {
      baseDir: dest,
    },
  });
}
gulp.task("browser-sync", browser);

// ///////////////////////////////////////////////////
// ======>>  SERVER BACK
// ///////////////////////////////////////////////////
function browserBack() {
  browserSync.init({
    proxy: "http://rpontes.local/wp-login.php",
  });
}
gulp.task("browser-sync-back", browserBack);

// ///////////////////////////////////////////////////
// ======>>  Ouvindo todas as modificações nos PATHS definidos
// ///////////////////////////////////////////////////
function watch() {
  gulp.watch(paths.scss.entry, compilaSass);

  gulp.watch(paths.cssPlugins.entry, pluginsCSS);

  gulp.watch(paths.html.entry, compilaHTML).on("change", browserSync.reload);

  gulp.watch(paths.js.entry, gulpJs);

  gulp.watch(paths.jsPlugins.entry, pluginsJs);

  gulp.watch(paths.images.entry, compilarImagens);
}
gulp.task("watch", watch);

// ///////////////////////////////////////////////////
// ======>>  Tarefas que Buildam o FrontEnd
// ///////////////////////////////////////////////////
gulp.task(
  "frontend",
  gulp.parallel(
    "del-build-front",
    "img",
    "watch",
    "html",
    "sass",
    "plugincss",
    "alljs",
    "pluginjs",
    "clone-front-end",
    "clone-back-end",
    "browser-sync"
  )
);
// ///////////////////////////////////////////////////
// ======>>  Tarefa que Clona o Assets do Front end para a pasta Back end
// ///////////////////////////////////////////////////
// gulp.task("backend", gulp.parallel("clone-back-end-assets"));

// ///////////////////////////////////////////////////
// ======>>  Tarefa que clona tudo o que está na pasta backend e joga para fora da pasta do projeto, exclusiva para construção de temas wordpress.
// ///////////////////////////////////////////////////
// gulp.task("wordpress", gulp.parallel("clone-back-end-to-theme"));
