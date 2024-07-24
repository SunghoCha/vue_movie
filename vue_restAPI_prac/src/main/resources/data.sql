insert into coach(first_name, last_name, description, hourly_rate)
values ('first001', 'last003', 'firstDesc', 1),
       ('first002', 'last002', 'secondDesc', 2),
       ('first003', 'last003', 'thirdDesc', 3);

-- coach_areas 테이블에 데이터 삽입

INSERT INTO coach_areas (coach_id, area)
VALUES (1, 'backend'),
       (1, 'frontend');

INSERT INTO coach_areas (coach_id, area)
VALUES (2, 'frontend'),
       (2, 'career');

INSERT INTO coach_areas (coach_id, area)
VALUES (3, 'backend'),
       (3, 'career');
