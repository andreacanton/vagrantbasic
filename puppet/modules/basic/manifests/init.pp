# Install basic

class basic::install {

  # create shared directory
  file { "/vagrant/www":
      ensure => "directory",
  }

  # import grunt's files
  file {
    '/vagrant/www/Gruntfile.js':
      source  => '/vagrant/files/grunt/Gruntfile.js',
      require => File["/vagrant/www"];
    '/vagrant/www/package.json':
      source  => '/vagrant/files/grunt/package.json',
      require => File["/vagrant/www"];
  }
  # compass config files
  file {
    '/vagrant/www/config.rb':
      source  => '/vagrant/files/compass/config.rb',
      require => File["/vagrant/www"];
    '/vagrant/www/prod-config.rb':
      source  => '/vagrant/files/compass/prod-config.rb',
      require => File["/vagrant/www"];
  }
  # gitignore
  file {
    '/vagrant/www/.gitignore':
      source  => '/vagrant/files/git/.gitignore',
      require => File["/vagrant/www"];
  }

}
