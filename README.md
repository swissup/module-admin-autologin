# Swissup Admin Autologin

The simple extension that allows to perform admin log in automatically without asking for login/password. 
Useful for demo purposes. Not recommended to use on production environment.

### Installation

```bash
cd <magento_root>
composer config repositories.swissup composer https://docs.swissuplabs.com/packages/
composer require swissup/module-admin-autologin --prefer-source
bin/magento module:enable Swissup_AdminAutologin
bin/magento setup:upgrade
bin/magento setup:static-content:deploy -f --area=adminhtml
bin/magento cache:flush
```
