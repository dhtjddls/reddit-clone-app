# 권한 추가 chmod +x organize_spec.sh

spec_files=$(find src -type f -regex ".*\.spec\.ts")

# Step 2: 찾은 파일들을 src/test 폴더로 이동
for file in $spec_files; do
  mv "$file" src/test
done