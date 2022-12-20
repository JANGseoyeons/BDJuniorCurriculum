# Quest 00. 형상관리 시스템

## Introduction

* git은 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics

* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources

* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist

* 형상관리 시스템은 왜 나오게 되었을까요?  
  * 형상관리란 개발한 코드/문서들을 하나의 관리 도구에서 통합적으로 버전별로 관리하게 되는 것을 말한다.  코드를 버전별로 관리하므로서 더 체계적으로 개발할 수 있다.

* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 분산 버전 관리 시스템이며, 매우 빠른 속도와 분산형 저장소 지원을 하는 것이 큰 특징이다.   분산형 형상관리 시스템이란 중앙에서 관리하고 있던 모든 이력을 가진 저장소 전체를 복사하여 사용자의 컴퓨터로 가져와 사용하는 시스템을 말한다.(로컬저장소와 원격저장소가 나뉘어 사용하는 시스템을 말한다.)

  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?  cvcx->dvcs 추세로 변함
    * 여러명이 개발할 수 있는 병렬개발을 할 수 있다.  프로젝트를 복사해 로컬환경에서 마음껏 개발할 수 있다.  중앙서버의 문제가 있어도 클라이어트 PC의 소스를 통한 원상 복구가 가능하다.

* git과 GitHub은 어떻게 다를까요?  
git은 소스코드를 효과적으로 관리할 수 있게 해주는 소프트웨어이며, github는 git파일을 업로드하는 곳이다.(저장소)

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?  
clone -> 원격저장소에 있는 코드를 로컬저장소로 복사하는 명령어  
add -> 로컬저장소에서 변경된 내용을 저장하는 명령어(커밋 전 상태)  
commit -> 변경한 내용을 기록하는 명령어(스냅샷)  
push -> 로컬저장소에서 변경된 내용을 원격저장소로 보내는 명령어  
pull -> 원격저장소에 있는 코드를 로컬저장소로 가져오는 명령어  
branch -> 독립적으로 코드를 개발하기 위해 공간을 만드는 명령어  
stash -> 현재 브랜치에서 커밋을 못한 상태에서 다른 브랜치로 이동하는 명령어
 clone vs pull, add vs commit 

* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
  * C언어에 char, int, long, float, double과 같은 데이터 타입이 있는 것처럼,  git은 내부적으로 commit, tree, blob, tag의 4가지 오브젝트 타입을 관리합니다.  
  

* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
  * 로컬에서 $ git reset 명령어를 이용  $ git revert [되돌리고 싶은 commit의 hash]는 특정 커밋에서의 변경 사항을 제거하는 또 다른 커밋을 생성하는 명령어 이용


## Quest

* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/BD-AP2/BDJuniorCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다. ✔️
* Windows의 경우 같이 설치된 git shell을, macOS의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.  ✔️
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다. ✔️
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다. ✔️

## Advanced

* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요? 
  * 분산 집중형 버전 관리 시스템이다.  Append 기반으로 동작함에 따라, 디스크에 오류가 있을 때에 저장소가 영향을 적게 받는다는 점도 Mercurial의 장점이다.
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요? 
 * github를 많이 사용하는 추세이다.



