%define website_root /var/www/html

Name: resume-website		
Version: 1.0.0.0	
Release:	1%{?dist}
Summary: My Resume Website	

License: Personal	
URL: https://gitlab.com/		
Source0: %{name}.zip	

Requires: httpd	

%description
My resume website

%prep
%setup -q -c %{name}-%{version}

%install
mkdir -p %{buildroot}/%{website_root}/charts
mkdir -p %{buildroot}/%{website_root}/colors
mkdir -p %{buildroot}/%{website_root}/css
mkdir -p %{buildroot}/%{website_root}/images
mkdir -p %{buildroot}/%{website_root}/scripts
cp -a charts/* %{buildroot}%{website_root}/charts
cp -a colors/* %{buildroot}%{website_root}/colors
cp -a css/* %{buildroot}%{website_root}/css
cp -a images/* %{buildroot}%{website_root}/images
cp -a scripts/* %{buildroot}%{website_root}/scripts
cp index.html %{buildroot}%{website_root}
cp web.config %{buildroot}%{website_root}
cp testpage.asp %{buildroot}%{website_root}


%files
%{website_root}/charts
%{website_root}/colors
%{website_root}/css
%{website_root}/images
%{website_root}/scripts
%{website_root}/index.html
%{website_root}/web.config
%{website_root}/testpage.asp

%changelog

