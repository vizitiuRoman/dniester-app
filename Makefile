build-android:
	cd android && ./gradlew assembleRelease
	cd ..
	rm -rf build && mkdir build
	cp ./android/app/build/outputs/apk/release/app-release.apk ./build/dniester_$(shell date +%FT%H-%M).apk

build-ios:
	yarn run ios
