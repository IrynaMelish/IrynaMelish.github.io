var gulp 		= require('gulp'),//Підключення gulp
	sass 		= require('gulp-sass'),//Підключення sass пакет
	browserSync = require('browser-sync'),//Підключення browser-sync
	concat		= require('gulp-concat'),//Підключення gulp-concat
	uglify		= require('gulp-uglifyjs'),	//Підключення gulp-uglifyjs	(для зжаття JS)															
	cssnano     = require('gulp-cssnano'),//Підключення пакету для мініміфікації сss
	rename		= require('gulp-rename'),//Підключення бібліотеки для перейменування файлів
	del			= require('del'),//Підключення бібліотеки для видалення файлів
	imagemin	= require('gulp-imagemin'),//Підключення бібліотеки для роботи з зображеннями
	pngquant	= require('imagemin-pngquant'),//Підключення бібліотеки для роботи з png
	cache		= require('gulp-cache'),//Підключення быблыотеки для кешування
	autoprefixer = require('gulp-autoprefixer');//Підключення быблыотеки для автоматичного добавляння префіксів

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.scss')//Створюэмо таск Sass
	.pipe(sass())//Перетворюємо sass в css за допомогою gulp-sass
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))//Створюємо префікси
	.pipe(gulp.dest('app/css'))// Выгружаем результата в папку app/css
	.pipe(browserSync.reload({stream:true}))//Обновляємо Css на сторінці
});

gulp.task('browser-sync', function(){ //Створюэмо таск browser-sync
	browserSync({ //Виконуємо
		server:{// Оприділяємо параметри сервера
			baseDir:'app'//Директорія для сервера - app
		},
		notify:false// Відключаємо повідомлення
	});
});

gulp.task('scripts', function(){
	return gulp.src([//Берем всі необхідні бібліотеки
		'app/libs/jquery/dist/jquery.min.js',//Берем Jquery
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		])// Берем Magnific Popup
		
	.pipe(concat('libs.min.js'))// Собираем їх в кучу в новому файле libs.min.js
	.pipe(uglify())// Сжимаем JS файл
	.pipe(gulp.dest('app/js'));// Выгружаем в папку app/js
});

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/libs.css')// Выбираем файл для минификации
	.pipe(cssnano())// Сжимаем
	.pipe(rename({suffix: '.min'}))// Добавляем суфікс .min
	.pipe(gulp.dest('app/css'));// Выгружаем в папку app/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
	gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);// Нагляд за sсss файлами в папке sass
	gulp.watch('app/*.html', browserSync.reload);// Нагляд за HTML файлами в корені проекта
	gulp.watch('app/js/**/*.js', browserSync.reload);// Нагляд за JS файлами в папке js
});
	



gulp.task('clean', function(){
	return del.sync('dist');// Удаляем папку dist перед зборкою
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*') // Берем всі зображення з app
	.pipe(cache(imagemin({// зжимаємо їх з найкращими настройками
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));// Вигружаєм на продакшен
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function(){
	var buildCss = gulp.src([// Переносим библиотеки в продакшен
'app/css/main.css',
'app/css/libs.min.css'
		])
.pipe(gulp.dest('dist/css'))

var buildFonts = gulp.src('app/fonts/**/*')
.pipe(gulp.dest('dist/fonts'))// Переносим шрифты в продакшен

var buildJs =  gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'))// Переносим скрипты в продакшен

var buidHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));// Переносим HTML в продакшен
});

gulp.task('clear', function(callback){
	return cache.clearAll();
})

gulp.task('default', ['watch']);









