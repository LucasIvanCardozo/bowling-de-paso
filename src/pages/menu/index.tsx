import { useState } from 'react';
import styles from './index.module.css';
import ItemCarta from '../../components/features/ItemCarta';
import Marcas from '../../components/features/Marcas';
import useIntersection from '../../hooks/useIntersection';
import type { MenuCategory, MenuSubCategory } from '../../types/menu';
import { Helmet } from 'react-helmet-async';
import { menuList } from '../../lib/db/repository/menu.repository';

export default function Page() {
  const categories = menuList();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [pagina, setPagina] = useState({ categoryId: 0, subcategoryId: 0 });

  const { ref: ref1, isVisible: isV1 } = useIntersection<HTMLHeadingElement>({
    threshold: 0,
  });
  const { ref: ref2, isVisible: isV2 } = useIntersection<HTMLLIElement>({
    threshold: 0,
  });

  const currentCategory = categories[pagina.categoryId];

  const handleCategoria = ({
    categoryIndex,
    category,
  }: {
    categoryIndex: number;
    category: MenuCategory;
  }) => {
    if (categoryIndex !== category.id) {
      setCategoryIndex(category.id);
      if (!category.hasSubCategory)
        setPagina({ categoryId: category.id, subcategoryId: 0 });
    }
  };

  const handleSubCategoria = ({
    categoryIndex,
    subCategory,
  }: {
    categoryIndex: number;
    subCategory: MenuSubCategory;
  }) => {
    setPagina({
      categoryId: categoryIndex,
      subcategoryId: subCategory.id,
    });
  };

  return (
    <>
      <Helmet>
        <title>Menu - Bowling de Paso</title>
        <meta
          name="description"
          content="Explora nuestra deliciosa carta en Bowling de Paso, Mar del Plata. Comidas, bebidas y postres para hacer tu experiencia memorable. ¡Ven y disfruta!
"
        />
      </Helmet>
      <main className={styles.main}>
        <div className={styles.titulo}>
          <h1 ref={ref1} data-isvisible={isV1}>
            MENÚ
          </h1>
          <p>
            En nuestro Bowling ofrecemos una variedad de comidas y bebidas
            deliciosas para una experiencia completa.
          </p>
        </div>
      </main>
      <article className={styles.carta}>
        <div className={styles.cartaNav}>
          <ul>
            {categories.map((category) => (
              <li
                className={styles.cartaCategorias}
                key={category.name}
                ref={category.id === 0 ? ref2 : null}
                data-isvisible={isV2 && category.id === 0}
                onClick={() => handleCategoria({ categoryIndex, category })}
                data-open={pagina.categoryId === category.id}
              >
                <p>{category.name}</p>
              </li>
            ))}
            {categories[categoryIndex].hasSubCategory && (
              <div className={styles.subcategoriasNav}>
                <ul>
                  {categories[categoryIndex].subCategories.map(
                    (subCategory) => (
                      <li
                        className={styles.subcategorias}
                        key={subCategory.name}
                        data-open={pagina.subcategoryId === subCategory.id}
                        onClick={() =>
                          handleSubCategoria({ categoryIndex, subCategory })
                        }
                      >
                        <p>{subCategory.name}</p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </ul>
        </div>
        <section className={styles.cartaInfo}>
          {currentCategory.hasSubCategory
            ? currentCategory.subCategories[pagina.subcategoryId].items.map(
                (item) => <ItemCarta key={item.name} item={item} />,
              )
            : currentCategory.items.map((item) => (
                <ItemCarta key={item.name} item={item} />
              ))}
          <Marcas />
        </section>
      </article>
    </>
  );
}
