--
-- PostgreSQL database dump
--

-- Dumped from database version 10.15 (Ubuntu 10.15-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.15 (Ubuntu 10.15-0ubuntu0.18.04.1)

-- Started on 2020-12-01 13:41:58 +03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 13043)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2967 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 205 (class 1259 OID 16565)
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    product_id integer NOT NULL,
    option_id integer NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16563)
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.carts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 199 (class 1259 OID 16509)
-- Name: product_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_options (
    id integer NOT NULL,
    price money NOT NULL,
    weight numeric(10,2) NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.product_options OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16507)
-- Name: product_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.product_options ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_options_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 201 (class 1259 OID 16521)
-- Name: product_photos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_photos (
    id integer NOT NULL,
    url text NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.product_photos OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16519)
-- Name: product_photos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.product_photos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 197 (class 1259 OID 16499)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(500) NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16497)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 16558)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    tel character varying(20) NOT NULL,
    user_type smallint NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16556)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2959 (class 0 OID 16565)
-- Dependencies: 205
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, user_id, product_id, option_id) FROM stdin;
1	1	1	1
\.


--
-- TOC entry 2953 (class 0 OID 16509)
-- Dependencies: 199
-- Data for Name: product_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_options (id, price, weight, product_id) FROM stdin;
1	25.90 руб	560.00	1
\.


--
-- TOC entry 2955 (class 0 OID 16521)
-- Dependencies: 201
-- Data for Name: product_photos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_photos (id, url, product_id) FROM stdin;
1	https://images.dominos.by/media/dominos/osg/api/2020/04/21/tsyplenok__dominator_small-min.png	1
\.


--
-- TOC entry 2951 (class 0 OID 16499)
-- Dependencies: 197
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description) FROM stdin;
1	Pizza with cheese	The best pizza with cheese!
\.


--
-- TOC entry 2957 (class 0 OID 16558)
-- Dependencies: 203
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, login, password, email, tel, user_type) FROM stdin;
1	admin	admin	newnewqwes@gmail.com	375333637970	666
2	user	user	newqwes@mail.ru	375256573217	1
\.


--
-- TOC entry 2968 (class 0 OID 0)
-- Dependencies: 204
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carts_id_seq', 1, true);


--
-- TOC entry 2969 (class 0 OID 0)
-- Dependencies: 198
-- Name: product_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_options_id_seq', 1, true);


--
-- TOC entry 2970 (class 0 OID 0)
-- Dependencies: 200
-- Name: product_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_photos_id_seq', 1, true);


--
-- TOC entry 2971 (class 0 OID 0)
-- Dependencies: 196
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, true);


--
-- TOC entry 2972 (class 0 OID 0)
-- Dependencies: 202
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- TOC entry 2823 (class 2606 OID 16569)
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- TOC entry 2817 (class 2606 OID 16513)
-- Name: product_options product_options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_options
    ADD CONSTRAINT product_options_pkey PRIMARY KEY (id);


--
-- TOC entry 2819 (class 2606 OID 16528)
-- Name: product_photos product_photos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_photos
    ADD CONSTRAINT product_photos_pkey PRIMARY KEY (id);


--
-- TOC entry 2815 (class 2606 OID 16506)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2821 (class 2606 OID 16562)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2827 (class 2606 OID 16575)
-- Name: carts cart_option; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT cart_option FOREIGN KEY (option_id) REFERENCES public.product_options(id);


--
-- TOC entry 2828 (class 2606 OID 16580)
-- Name: carts cart_product; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT cart_product FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 2826 (class 2606 OID 16570)
-- Name: carts cart_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT cart_user FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 2824 (class 2606 OID 16514)
-- Name: product_options option_product; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_options
    ADD CONSTRAINT option_product FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 2825 (class 2606 OID 16529)
-- Name: product_photos photo_product; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_photos
    ADD CONSTRAINT photo_product FOREIGN KEY (product_id) REFERENCES public.products(id);


-- Completed on 2020-12-01 13:41:58 +03

--
-- PostgreSQL database dump complete
--

