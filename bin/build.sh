##########################################################################
# @file ./bin/build.sh
# @author Jack (chengjunjie.jack@gmail.com)
# @brief 
# @version 0.1
# @date 2023-04-12
#########################################################################

#!/usr/bin/env bash

set -e
set -x
set -o pipefail

yarn install --production=false
yarn build:scss:type
yarn build
