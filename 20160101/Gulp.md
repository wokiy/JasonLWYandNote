## Gulp介绍 [自动化工具，常见用处]
  - 搭建web服务器
  - 文件保存时自动重载浏览器
  - 预处理 less sass
  - 优化资源，压缩css js imgae......
  
> 还可以搭建静态页面生成器

##### why use Gulp
 webpack and Gulp  区别呢?(模块化的区别呗)
 
 主要区别是你如何使用他们构建自动化工作流。与Grunt相比，Gulp更加简洁，执行效率更高。
 
 
##### Gulp使用

 - npm install gulp -g //全局安装
 - npm init //初始化项目
 - npm install gulp --save-dev //本地安装
 
#### 文件目录结构
- app文件夹作为开发目录，dist文件夹作为存放生产环境文件（打包文件）
![目录](https://dn-w3ctrain.qbox.me/gulp-for-beginner-structure.png)
 
##### 任务开始
 - root下 vim gulpfile.js
 ```
  var gulp = require('gulp');
  //这行命令告知Node去node_modules中查找gulp包，先局部查找，找不到就去全局环境中查找。
  //简单任务
  gulp.task('task-name',function(){
    ///......task-name 任务的名字 
    //在命令中执行 gulp task-name 运行改任务
  })
 ```
 - 例子
 ```
    gulp.task('jasonlwy', function(){
      console.log('jasonlwy hello');
    })
    //命令 gulp jasonlwy
    //结果 输出 jasonlwy hello
 ```
> Gulp任务通常都会比这难一丁点，就一丁点。通常会包含两个特定的Gulp方法和一些列Gulp插件。
 ```
  gulp.task('task-name', function(){
    return gulp.src('source-file')
    .pipe(aGulpPlugin)
    .pipe(gulp.dest('destination'))
  })
  // src dest 进 出（output）
 ```
##### Gulp 预处理
- 安装gulp-sass
```
  npm install gulp-sass --save-dev
```
- gulpfile.js 映入插件 
```
  var gulp = require('gulp');
  
  var sass = require('gulp-sass');
  //任务
  gulp.task('sass', function(){
    return gul.src(app/scss/demo.scsss)
    .pipe(sass())
    .pipe(sgulp.dest('app/css'))
  });
  
  //demo.scss
  .demo {
    width: (480/12)px;
  }
  //执行命令
  gulp sass
```
##### 文件通配符使用
  - *.scss : *号匹配当前目录任意文件，所以这里*.scss匹配当前目录下所有scss文件
  - **/*.scss：匹配当前目录及其子目录下的所有scss文件。
  - !not-me.scss：！号移除匹配的文件，这里将移除not-me.scss
  - *.+(scss|sass)：+号后面会跟着圆括号，里面的元素用|分割，匹配多个选项。这里将匹配scss和sass文件
###### 例子  
> 任何app下的scss文件，在执行命令之后将生成对应的css文件存放到相应路径  
```
  gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
  })
```
##### 监听sass文件 (watch命令 自动检测变化)
> Gulp提供watch方法
```
  gulp.watch('app/scss/**/*.scss', ['sass']);
```

> 任务化watch
```
  gulp.task('watch', function(){
     gulp.watch('app/scss/**/*.scss', ['sass']);
  })
  //gulp watch 运行以后就有了监听
```
#### Browser Sync 自动刷新
- 新插件
```
  npm install browser-sync --save-dev
  //引入
  var browserSync = require('browser-sync');
  //执行任务
  gulp.task('browserSync', function(){
    browserSync({
        server: {
          baseDir: 'app' //我们创建一个broswerSync任务，我们需要告知它，根目录在哪里。
        },
    })
  })
```
- 我们稍微修改一下之前的代码，让每次css文件更改都刷新一下浏览器
```
  gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')// Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true 
    }))
  })
```
- 我们可以在watch任务之前告知Gulp，先把browserSync和Sass任务执行了再说。
```
  gulp.task('watch',['browserSync', 'sass'] function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
  })
```

## 优化css和js文件
> gulp-useref会将多个文件拼接成单一文件，并输出到相应目录.[解决文件引入顺序问题]指定产出路径。我们想最终产出main.min.js。可以这样写：
```
  npm install gulp-useref --save-dev
  
  var useref = require('gulp-useref');
  
  gulp.task('useref', function(){

  return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
  });
```
- 执行useref命令，Gulp将合并三个script标签成一个文件，并保存到dist/js/main.min.js。合并完之后，我们再来压缩。使用gulp-uglify插件。
```
  npm install gulp-uglify --save-dev
  
  var uglify = require('gulp-uglify');
  gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(uglify())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
  });
  
```
![usersf](https://dn-w3ctrain.qbox.me/gulp-for-beginner-useref-html.png)

> 使用gulp-minify-css压缩css。

```
  var gulpIf = require('gulp-if');
  var minifyCSS = require('gulp-minify-css');
  
  gulp.task('useref', function(){
    return gulp.src('app/*.html')
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', minifyCSS()))
      // Uglifies only if it's a Javascript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(useref())
      .pipe(gulp.dest('dist'))
  });
```
#### 图片插件处理
> gulp-imagemin插件

```
  npm install gul-imagemin --save-dev
  //使用gulp-imagemin插件
  var imagemin = require('gulp-imagemin');
  gulp.task('image', function(){
    return gulp.src('app/iamges/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    ,.pipe(gulp.dest('app/images'))
  });
```

- 压缩图片可能会占用较长时间，使用 gulp-cache 插件可以减少重复压缩。
```
  npm install gulp-cache --save-dev
  
  var cache = require('gulp-cache');
  gulp.task('images',function(){
    return gulp.src('app/imgaes/**/*.+(png|jpg|gjf|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('app/images'))
  })
```
#### clean 生成的文件
> 由于我们是自动生成文件，我们不想旧文件掺杂进来。
```
  npm install del --save-dev
  
  //使用
  var del = require('del');
  gulp.task('del', function(){
    del('dist');
    return cache.clearAll(callback);
  })
```
- 由于我们是自动生成文件，我们不想旧文件掺杂进来。
```
  gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
  });
```
## 组合任务
> RunSequence 
```
  gulp.task('build', function (callback) {
    runSequence('clean:dist',
      ['sass', 'useref', 'images', 'fonts'],
      callback
    )
  })
```
> 开发任务
```
  gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
  })
```
# Gulp其实非常简单，多玩一下，你就能完全掌握它了，有能力的话，可以尝试开发Gulp插件。





 
 
 
 
  
  
