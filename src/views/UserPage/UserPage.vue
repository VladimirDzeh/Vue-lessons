<template>
   <div class="wrapper">
        <header class="header">
            <div class="container">
                <NavBar />
            </div>
        </header>
        <main class="main">
            <div class="container">
                <div class="user">
                    <div class="user__photo">
                        <img class="user__icon" src="@/assets/images/user-icon.png" width="300" height="300" alt="user-photo"
                        >
                        <DropdownMenu 
                            class="user__dropdown" 
                            :itemNames="['Редактировать', 'Удалить']"
                        >
                            <GlobalBtn class="user__btn" :class="['global-btn__white']">
                                <IconSvg :svgParam="svgData"/>
                            </GlobalBtn>
                        </DropdownMenu>
                    </div>
                    <div class="user__content">
                        <div class="user__title-block title-block">
                            <h2 class="title-block__name">
                                {{user.name}}
                            </h2>
                            <StatusVue :status="user.status"/>
                            <DropdownMenu 
                                class="title-block__dropdown" 
                                :itemNames="['Редактировать', 'Изменить пароль', 'Просмотр задач пользователя']"
                            >
                                <GlobalBtn class="title-block__btn" :class="['global-btn__white']">
                                    <IconSvg :svgParam="svgData"/>
                                </GlobalBtn>
                            </DropdownMenu>
                        </div>
                        <div class="user__about-block about-block">
                            <p class="about-block__title">О себе:</p>
                            <p class="about-block__text">{{user.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import GlobalBtn from '@/components/UiComponents/GlobalBtn/GlobalBtn.vue'
import IconSvg from '@/components/UiComponents/IconSvg/IconSvg.vue'
import DropdownMenu from '@/components/UiComponents/DropdownMenu/DropdownMenu.vue'
import StatusVue from '@/components/UiComponents/StatusVue/StatusVue.vue'

export default {
    name: "UserPage",

    components: {
        NavBar,
        GlobalBtn,
        IconSvg,
        DropdownMenu,
        StatusVue
    },

     data() {
        return {
            svgData: {
                name: 'dots',
                width: '4',
                height: '13'
            },

            user: {
                "roles": [
                    "USER"
                ],
                "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель рекламных текстов, напоивший его языком и речью и заманивший в свое агенство, которое использовало его снова и снова в своих проектах. И если его не переписали, то живет он там до сих пор. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка р.",
                "picture": "",
                "status": "ACTIVE",
                "_id": "234324234",
                "name": "Дзех Владимир Александрович"
            }
        }
    },


}
</script>

