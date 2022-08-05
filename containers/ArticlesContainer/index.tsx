import style from './index.module.scss'
import RWDBurger from '../../components/AdminPage/RWDBurger'
import Image from 'next/image'
import { Grid } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const articleData = [
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  },
  {
    picture: '/articles/pic1.jpg',
    title: '買到漏水屋、海砂屋等瑕疵屋怎麼辦？先確認這3件事再採取行動',
    time: '2022-08-05 16:48:00'
  }
]

const ArticlesContainer = () => {
  return (
    <div className={style.ArticlesContainer}>
      <RWDBurger />
      <div className={style.Title}>
        <span>文章列表</span>
      </div>

      <div className={style.Articles}>
        <div className={style.Container}>
          {
            articleData.map((article, index) => {
              return <div className={style.ArticleCard} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Image
                      className={style.ArticlePicture}
                      src={article.picture} width='130px' height='130px'
                    ></Image>
                  </Grid>
                  <Grid item xs={7} sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <p
                      className={style.ArticleTime}
                    >{article.time}</p>
                    <p
                      className={style.ArticleTitle}
                    >{article.title}</p>
                  </Grid>
                  <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <EditIcon />
                    <DeleteIcon />
                  </Grid>
                </Grid>
              </div>
            })
          }
        </div>
      </div>
    </div >
  )
}

export default ArticlesContainer
