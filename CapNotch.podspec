
  Pod::Spec.new do |s|
    s.name = 'CapNotch'
    s.version = '0.0.1'
    s.summary = 'is notch screen judgement'
    s.license = 'MIT'
    s.homepage = 'https://github.com/mbossX/cap-notch.git'
    s.author = 'MBossX'
    s.source = { :git => 'https://github.com/mbossX/cap-notch.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end